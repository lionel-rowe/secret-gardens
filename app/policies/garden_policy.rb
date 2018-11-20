class GardenPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    true  # Anyone can view a garden
  end

  def create?
    true  # Anyone can create a garden
  end

  def update?
    record.user == user  # Only garden creator can update it
  end

  def destroy?
    record.user == user  # Only gardn creator can update it
  end
end
