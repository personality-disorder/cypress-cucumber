Feature: Login Feature

    Feature This feature is required for a user log in.
    Scenario: Success Login
    Given A user opens the login page
    When A user enter a username "testuser@iptiq.com"
    And A user enter a password "test1234"
    And A user clicks on the login button
    Then A user will be logged in
    And A user clicks New Post
    Then A user enter an article title "randomValue"
    And A user write what this article is about "Article demo"
    And A user write Markdown "this is demo"
    And A user write a tag "#this is a tag"
    And A user clicks on post button
    Then A user write down a comment
    And A user click on post button
   