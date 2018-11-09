defmodule Backend.Google do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  def get_room() do
    id = Application.get_env(:backend, :room_id)
    case id do
      :stockholm -> "Stockholm Meeting Room"
      _ -> "Belgrade Meeting Room"
    end
  end


  def get_events() do
    room = get_room
    token = get_token
    connection = get_connection(token)
    calendar = get_calendar(connection, room)
    events = get_events(connection, calendar)
  end

  def get_token() do
    {:ok, map} = Goth.Token.for_scope("https://www.googleapis.com/auth/calendar")
    {:ok, token} = Map.fetch(map, :token)
    token
  end

  def get_connection(token) do
    GoogleApi.Calendar.V3.Connection.new(token)
  end

  def get_calendar(connection, room) do
    {:ok, calendars} = GoogleApi.Calendar.V3.Api.CalendarList.calendar_calendar_list_list(connection)
    {:ok, items} = Map.fetch(calendars, :items)
    [calendar] = Enum.filter(items, fn(x) -> {:ok, room} == Map.fetch(x, :summary) end)
    Map.fetch!(calendar, :id)
  end

  def get_events(connection, calendar) do
    {:ok, events} = GoogleApi.Calendar.V3.Api.Events.calendar_events_list(connection, calendar)
    {:ok, items} = Map.fetch(events, :items)
    Enum.map(items, fn(x) -> %{:from => get_date(Map.fetch!(x, :start)),
                               :to => get_date(Map.fetch!(x, :end)),
                               :summary => Map.fetch!(x, :summary),
                               :creator => get_creator(Map.fetch!(x, :creator)),
                               :company => "Sharpfin AB"
                              } end)
  end
  def get_date(date) do
    DateTime.to_unix(Map.fetch!(date, :dateTime), :second)
  end

  def get_creator(creator) do
    Map.fetch!(creator, :email)
  end

end
