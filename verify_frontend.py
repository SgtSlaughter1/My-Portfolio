from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:4173/")

        # Verify title
        title = page.title()
        print(f"Page title: {title}")
        assert "Habeeb Abdulsalam" in title

        # Take screenshot of home
        page.screenshot(path="verification_home.png")
        print("Screenshot of Home saved to verification_home.png")

        # Scroll to portfolio
        portfolio_section = page.locator("#portfolio")
        portfolio_section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000) # Wait for animations
        page.screenshot(path="verification_portfolio.png")
        print("Screenshot of Portfolio saved to verification_portfolio.png")

        # Test Read More functionality on the first card
        # The first card is "Across Ummah CIC"
        first_card = page.locator(".portfolio-item").first
        read_more_btn = first_card.locator("text=Read More")

        if read_more_btn.count() > 0:
            read_more_btn.click()
            page.wait_for_timeout(500)

            # Check if expanded text is visible
            # The text starts with "My responsibilities included architecting"
            expanded_text = first_card.locator("text=My responsibilities included architecting")
            if expanded_text.is_visible():
                print("Read More expanded successfully.")
            else:
                print("Read More expansion FAILED.")

            page.screenshot(path="verification_read_more.png")
            print("Screenshot of Expanded Card saved to verification_read_more.png")

            # Test Read Less
            read_less_btn = first_card.locator("text=Read Less")
            if read_less_btn.count() > 0:
                read_less_btn.click()
                page.wait_for_timeout(500)
                if not expanded_text.is_visible():
                    print("Read Less collapsed successfully.")
                else:
                    print("Read Less collapse FAILED.")
            else:
                 print("Read Less button not found.")

        else:
            print("Read More button not found on first card.")

        browser.close()

if __name__ == "__main__":
    run()
