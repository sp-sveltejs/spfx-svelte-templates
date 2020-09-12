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

export interface IHelloSvelteWebPartProps {
  description: string;
}

export default class HelloSvelteWebPart extends BaseClientSideWebPart<IHelloSvelteWebPartProps> {

  public render(): void {
    const hello = new Hello({
      target: this.domElement,
      props: {
        description: "Test"
      }
    });
    
    
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