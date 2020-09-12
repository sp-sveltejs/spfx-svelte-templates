declare interface IHelloSvelteWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloSvelteWebPartStrings' {
  const strings: IHelloSvelteWebPartStrings;
  export = strings;
}
