<script lang="ts">


export let description: string;
export let styles: object;
</script>

<div class="{ styles.helloSvelte }">
    <div class="{ styles.container }">
      <div class="{ styles.row }">
        <div class="{ styles.column }">
          <span class="{ styles.title }">Welcome to SharePoint!</span>
          <p class="{ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
          <p class="{ styles.description }">{description}</p>
          <a href="https://aka.ms/spfx" class="{ styles.button }">
            <span class="{ styles.label }">Learn more</span>
          </a>
        </div>
      </div>
    </div>
  </div>`;