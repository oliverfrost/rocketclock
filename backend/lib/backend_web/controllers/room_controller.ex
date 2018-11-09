defmodule BackendWeb.RoomController do
  use BackendWeb, :controller

  def index(conn, _) do
    id = Application.get_env(:backend, :room_id)
    name = case id do
      :stockholm -> "Stockholm"
      :belgrade -> "Belgrade"
      _ -> "Unknown"
    end
    render(conn, "index.json", %{data: %{room: name}})
  end

end
