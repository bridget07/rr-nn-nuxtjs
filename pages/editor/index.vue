<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form @submit.prevent="onsubmit">
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="article.title">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?" v-model="article.description">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="article.body"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input v-model="tag" type="text" class="form-control" placeholder="Enter tags" @keyup.enter="addTag">
                <div class="tag-list">
                    <span class="tag-default tag-pill ng-binding ng-scope" v-for="(tag,index) of article.tagList" :key="index">
                        <i class="ion-close-round" @click="delTag(index)"></i>
                        {{ tag }}
                    </span>
                </div>

            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onsubmit()" :disabled="disabled">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { createArticle, getArticle, updateArticle } from "@/api/article";

export default {
    middleware: 'authenticated',
    name: 'EditIndex',
    data() {
      return {
        article: {
            title: "",
            description: "",
            body: "",
            tagList: [],
        },
        tag: '',
        slug: '',
        disabled: false,
      };
    },
    async mounted() {
        const slug = this.$route.params.slug;
        if (slug) {
            this.slug = slug;
            const { data } = await getArticle(slug);
            const { article } = data;
            this.article = article;
        }
    },
    methods: {
      addTag() {
        this.article.tagList.push(this.tag);
        this.tag = "";
      },
      delTag(index) {
        this.article.tagList.slice(index, 1)
      },
      async onsubmit() {
        this.disabled = true
        const submitArticle = this.slug ? updateArticle : createArticle;
        const { data } = await submitArticle({
          article: this.article,
        });
        this.disabled = true
        const slug = data.article.slug
        this.slug = slug
        this.$router.push({
            name: 'article',
            params: {
                slug
            }
        })
      },
  },
}
</script>

<style>

</style>