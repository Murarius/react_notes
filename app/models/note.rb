class Note < ActiveRecord::Base
  validates :body, length: { in: 1..16 }
end
