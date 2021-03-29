import { Context } from "@storybook/addon-storyshots-puppeteer";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace,no-redeclare
  namespace jest {
    interface Matchers<R, T> {
      toBeAccessible(parameters: any): R;
    }
  }
}

export type Pa11yTestFnOptions = {
  page: string;
  options: { context: Context };
};

export const pa11y = async ({
  page,
  options,
}: Pa11yTestFnOptions): Promise<void> =>
  await expect(page).toBeAccessible(options.context.parameters.pa11yOptions);
