class Note < ActiveRecord::Base
  validates :body, length: { in: 1..21 }
end
