defmodule BackendWeb.RoomController do
  use BackendWeb, :controller

  def index(conn, _) do
    name = Backend.Google.get_room()
    render(conn, "index.json", %{data: %{room: name}})
  end

end
