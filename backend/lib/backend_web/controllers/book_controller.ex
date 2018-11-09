defmodule BackendWeb.BookController do
  use BackendWeb, :controller

  def index(conn, %{"room" => room}) do
    case room do
      "stockholm" -> render(conn, "index.json", %{data: %{room: "Stockholm"}})
      "belgrade" -> render(conn, "index.json", %{data: %{room: "Belgrade"}})
      _ -> render(conn, "index.json", %{data: %{room: "None"}})
    end
  end

end
