export class AppConfigService {
  private static instance: AppConfigService;

  public readonly companyName: string;
  public readonly footer: string;

  private constructor() {
    this.companyName = "Acme Inc.";
    this.footer = "Confidential";
  }

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }

    return AppConfigService.instance;
  }
}