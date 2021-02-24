<template>
  <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{ profile.username }}</h4>
          <p>
            {{ profile.bio }}
          </p>
          <button
            v-if="profile.username !== user.username"
            class="btn btn-sm btn-outline-secondary action-btn"
            :disabled="followDisabled"
             @click="onFollow"
          >
            <i class="ion-plus-round"></i>
            &nbsp; {{ profile.following ? 'UnFollow' : 'Follow' }} {{ profile.username }}
            
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'my_articles',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'my_articles',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited_articles',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited_articles',
                    },
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
          </ul>
        </div>

        <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
        >
          <div class="article-meta">
            <nuxt-link
              :to="{
                name: 'profile',
                params: {
                  username: article.author.username,
                },
              }"
            >
              <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link
                class="author"
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
              >
                {{ article.author.username }}
              </nuxt-link>
              <span class="date">{{
                article.createdAt | date("MMM DD, YYYY")
              }}</span>
            </div>
            <button 
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
            >
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
          <nuxt-link class="preview-link" :to="{
						  name: 'article',
						  params: {
							  slug: article.slug
						  }
					  }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list" v-if="article.tagList.length > 0">
                <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList" :key="tag">{{ tag }}</li>
              </ul>
          </nuxt-link>
        </div>

        <!-- 分页列表 -->
        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              :class="{
                active: item === page
              }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                :to="{
                  name: 'profile',
                  query: {
                    tab: tab,
                    page: page,
                  }
                }"
                >{{ item }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <!-- /分页列表 -->


      </div>

    </div>
  </div>

</div>
</template>

<script>
import { getProfile, followUser, unFollowUser } from '@/api/user'
import {
      getArticles,
		  deleteFavorite,
      addFavorite,
      delArticle
	 } from "@/api/article";
import { mapState } from 'vuex'
export default {
    middleware: 'authenticated',
    name: 'UserProfile',
    data(){
      return {
        followDisabled: false,
      }
    },
    async asyncData({ params, query }) {
      const tab = query.tab || 'my_articles'
      const limit = 20;
      const page = Number.parseInt(query.page || 1);
      let sendData = {}
      sendData = tab === 'my_articles' 
        ? { author: params.username }
        : { favorited: params.username }
      sendData.limit = limit
      sendData.offset = (page - 1) * limit
      const [ profileData, articleData ] = await Promise.all([
        getProfile(params.username),
        getArticles(sendData)
      ])
      const { profile } = profileData.data
      const { articles, articlesCount } = articleData.data
      return {
        profile,
        articles,
        articlesCount,
        tab,
        page,
        limit
      }
    },
    watchQuery: ["page", "tab"],
    computed: {
      ...mapState(["user"]),
      totalPage() {
        return Math.ceil(this.articlesCount / this.limit);
      },
    },
    methods: {
      async onFollow() {
        this.followDisabled = true;
        const optUser = this.profile.following ? unfollowUser : followUser
        const { data } = await optUser(this.profile.username);
        this.profile = data.profile
        this.followDisabled = false;
      },
      async onFavorite(article) {
        article.favoriteDisabled = true
        if(article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount += -1
        } else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteDisabled = false
      }
    },

}
</script>

<style>

</style>