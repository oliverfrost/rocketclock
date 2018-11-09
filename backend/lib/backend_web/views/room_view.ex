defmodule BackendWeb.RoomView do
  use BackendWeb, :view

  def render("index.json", %{data: data}) do
    data
  end

end
