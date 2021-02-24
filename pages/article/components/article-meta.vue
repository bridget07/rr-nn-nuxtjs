<template>
    <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link class="author" :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="article.author.username === user.username">
        <nuxt-link class="btn btn-outline-secondary btn-sm"
            :to="{
                name: 'editor',
                params:{
                    slug: article.slug
                }
            }"
          >
          <i class="ion-edit"></i> Edit Article
        </nuxt-link>

        <button class="btn btn-outline-danger btn-sm" :disabled="deleteDisabled" @click="delArticle(article.slug)">
            <i class="ion-trash-a"></i> Delete Article
        </button>
    </template>
    <template v-else>

      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following
        }"
        @click="onFollow(article.author)"
        :disabled="followDisabled"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{ article.author.following ? "unFollow" : "Follow" }} {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited
        }"
        @click="onFavorite(article)"
        :disabled="favoriteDisabled"
      >
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post <span class="counter">({{article.favoritesCount}})</span>
      </button>
    </template>
  </div>
</template>

<script>
import { followUser, unfollowUser } from '@/api/user'
import {
		  deleteFavorite,
      addFavorite,
      delArticle
	 } from "@/api/article";
import { mapState } from "vuex";

export default {
    name: 'ArticleMeta',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed: {
      ...mapState(['user'])
    },
    data(){
      return {
        followDisabled: false,
        favoriteDisabled: false,
        deleteDisabled: false,
      }
    },
    methods: {
      async delArticle(slug){
        this.deleteDisabled = true
        await delArticle(slug);
        this.deleteDisabled = false
				this.$router.push("/")
      },
      async onFollow(author) {
        this.followDisabled = true;
        const optUser = author.following ? unfollowUser : followUser
        await optUser(author.username);
        author.following = !author.following;
        this.followDisabled = false;
      },

      async onFavorite(article) {
        this.favoriteDisabled = true
        if(article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount += -1
        } else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        this.favoriteDisabled = false
      }
    },
}
</script>

<style>

</style>