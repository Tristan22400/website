import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all pages from navbar', async ({ page, isMobile }) => {
    // Skip this test on mobile as desktop links are hidden
    test.skip(isMobile, 'Desktop navigation is hidden on mobile');

    await page.goto('/');
    await expect(page).toHaveTitle(/Home/);

    // Check CV link instead of navigating.
    // On mobile, this requires opening the menu first, but in this specific test 'should navigate to all pages', we skip on mobile.
    // So this assertion runs on desktop.
    const cvLink = page.getByText('CV').first();
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute('href', 'https://drive.google.com/file/d/1t8JFliL_SvDzfhtFvG7yt4CkZGLKznNX/view?usp=drive_link');
    await expect(cvLink).toHaveAttribute('target', '_blank');
    await expect(cvLink).toHaveAttribute('rel', 'noopener noreferrer');

    await page.click('text=Projects');
    await expect(page).toHaveTitle(/Projects/);

    await page.click('text=Publications');
    await expect(page).toHaveTitle(/Publications/);

    await page.click('text=Contact');
    await expect(page).toHaveTitle(/Contact/);
  });

  test('mobile navigation menu works', async ({ page, isMobile }) => {
    // Only run on mobile
    test.skip(!isMobile, 'Mobile menu is only visible on mobile');
    
    await page.goto('/');
    
    // Check that desktop menu is hidden
    await expect(page.locator('.hidden.sm\\:ml-6')).toBeHidden(); 

    // Click hamburger button
    await page.click('#mobile-menu-button');
    
    // Check menu is visible
    // Check menu is visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Verify CV link attributes (external link)
    const mobileCvLink = mobileMenu.getByText('CV');
    await expect(mobileCvLink).toBeVisible();
    await expect(mobileCvLink).toHaveAttribute('href', 'https://drive.google.com/file/d/1t8JFliL_SvDzfhtFvG7yt4CkZGLKznNX/view?usp=drive_link');
    await expect(mobileCvLink).toHaveAttribute('target', '_blank');

    // Navigate to another internal page (e.g. Projects) to verify menu functionality
    await mobileMenu.getByText('Projects').click();
    await expect(page).toHaveTitle(/Projects/);
  });
});

test.describe('Assets', () => {
  test('profile picture should load', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('img[alt="Tristan Martin"]');
    await expect(img).toBeVisible();
    
    // Check natural width to ensure it loaded
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });
});

test.describe('Functional Features', () => {
  test('projects filtering works', async ({ page }) => {
    await page.goto('/projects');
    
    // Initially all projects visible
    const cards = page.locator('.project-card');
    await expect(cards).toHaveCount(3); // We added 3 projects

    // Click a filter (e.g., Python)
    await page.click('button[data-filter="Python"]');
    // All 3 projects use Python, check visible
    await expect(page.locator('.project-card:visible')).toHaveCount(3);

    // Click a filter that selects fewer (e.g., Reinforcement Learning)
    await page.click('button[data-filter="Reinforcement Learning"]');
    await expect(page.locator('.project-card:visible')).toHaveCount(1);
    
    await page.click('button[data-filter="all"]');
    await expect(page.locator('.project-card:visible')).toHaveCount(3);
  });
  
  test('publications filtering works', async ({ page }) => {
    await page.goto('/publications');
    const items = page.locator('.publication-item');
    // We removed all publications, so expect 0
    await expect(items).toHaveCount(0);
    
    // Filter buttons: "All" should still be visible even if there are no other types
    const allButton = page.locator('button[data-filter="all"]');
    await expect(allButton).toBeVisible();
  });
});
