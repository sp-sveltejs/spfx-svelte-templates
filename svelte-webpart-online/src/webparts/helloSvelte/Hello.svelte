<script lang="ts">

import styles from './HelloSvelteWebPart.module.scss';
export let description: string;
</script>

<div >
    <div >
      <div>
        <div >
          <span >Welcome to SharePoint!</span>
          <p >Customize SharePoint experiences using Web Parts.</p>
          <p >{description}</p>
          <a href="https://aka.ms/spfx">
            <span >Learn more</span>
          </a>
        </div>
      </div>
    </div>
  </div>`;