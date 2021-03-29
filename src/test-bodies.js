export const pa11y = async ({ page, options }) =>
  await expect(page).toBeAccessible(options.context.parameters.pa11yOptions);
