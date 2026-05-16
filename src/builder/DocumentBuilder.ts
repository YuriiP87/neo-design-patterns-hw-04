export class DocumentBuilder {
  private header = "";
  private body = "";
  private footer = "";

  public addHeader(header: string): this {
    this.header = header;
    return this;
  }

  public addBody(body: string): this {
    this.body = body;
    return this;
  }

  public addFooter(footer: string): this {
    this.footer = footer;
    return this;
  }

  public build(): string {
    const result = [
      this.header ? `=== ${this.header} ===` : "",
      this.body,
      this.footer,
    ]
      .filter(Boolean)
      .join("\n\n");

    this.reset();

    return result;
  }

  private reset(): void {
    this.header = "";
    this.body = "";
    this.footer = "";
  }
}