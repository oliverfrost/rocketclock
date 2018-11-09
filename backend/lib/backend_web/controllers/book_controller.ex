defmodule BackendWeb.BookController do
  use BackendWeb, :controller

  def index(conn, _) do
    events = Backend.Google.get_events

    render(conn, "index.json", %{data: events})
  end

end
