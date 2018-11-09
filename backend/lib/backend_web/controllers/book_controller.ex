defmodule BackendWeb.BookController do
  use BackendWeb, :controller

  def index(conn, %{"room" => room}) do
    render(conn, "index.json", %{data: [%{from: 1541758500, to: 1541761200, company: "Sharpfin"},
                                        %{from: 1541768400, to: 1541772000, company: "Sharpfin"},
                                        %{from: 1541775600, to: 1541782800, company: "Entercash"},
    ]})
  end

end
