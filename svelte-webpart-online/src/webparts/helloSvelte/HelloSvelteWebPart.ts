import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloSvelteWebPart.module.scss';
import * as strings from 'HelloSvelteWebPartStrings';

import Hello from './Hello.svelte';

import '@pnp/polyfill-ie11/';
export interface IHelloSvelteWebPartProps {
  description: string;
}

export default class HelloSvelteWebPart extends BaseClientSideWebPart<IHelloSvelteWebPartProps> {
  private hello: Hello; 
  public async onInit(): Promise<void> {
    this.hello = new Hello({
      target: this.domElement,
      props: {
        description: escape(this.properties.description), 
        styles: styles
      }
    });
    return Promise.resolve<void>();
  }
  public render(): void {
    this.hello.description = escape(this.properties.description);
    
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
