class NotesController < ApplicationController
  def index
    @notes = Note.all
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render jscon: @note
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.require(:note).permit(:body)
  end
end
