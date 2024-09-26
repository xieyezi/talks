<script setup>
defineProps({
  name: String,
  repoLink: String,
  hideOwner: Boolean,
})
</script>

<template>
  <span>
    <ph:gitlab-logo-simple mr="2" opacity="60" class="transform translate-y-1px" />
    <a :href="repoLink" target="_blank" border="!0" font="mono" opacity="80">
      {{ hideOwner ? name.split('/')[1] : name }}
    </a>
  </span>
</template>
