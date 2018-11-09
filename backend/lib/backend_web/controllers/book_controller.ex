defmodule BackendWeb.BookController do
  use BackendWeb, :controller

  def index(conn, %{"test" => test}) do
    render(conn, "index.json", %{data: test})
  end

end
