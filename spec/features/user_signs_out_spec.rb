require 'rails_helper'

feature 'user signs out', %Q{
  As an authenticated user
  I want to sign out
  So that my identity is forgotten about on the machine I'm using
} do
  # Acceptance Criteria
  # * If I'm signed in, I have an option to sign out
  # * When I opt to sign out, I get a confirmation that my identity has been
  #   forgotten on the machine I'm using

  scenario 'authenticated user signs out' do
    user = User.create(first_name: "Danny", last_name: "Slants", email: "dgthrower@gmail.com", password: "123456", location: "Boston, MA", skill_level: "Intermediate")

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    fill_in 'First Name', with: user.first_name
    fill_in 'Last Name', with: user.last_name
    fill_in 'Location', with: user.location
    fill_in 'Skill Level', with: user.skill_level

    click_button 'Log in'

    expect(page).to have_content('Signed in successfully')

    click_link 'Sign Out'
    expect(page).to have_content('Signed out successfully')
  end

  scenario 'unauthenticated user attempts to sign out' do
    visit '/'
    expect(page).to_not have_content('Sign Out')
  end
end
