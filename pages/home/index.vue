<template>
    <div class="home-page">
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li v-if="user" class="nav-item">
                                <nuxt-link class="nav-link" 
									:class="{
										active: tab === 'your_feed'
									}"
									exact
									:to="{
										name: '/',
										query: {
											tab: 'your_feed',
										}
									}"
									>
									Your Feed
								</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" 
									:class="{
										active: tab === 'global_feed'
									}"
									exact
									:to="{
										name: '/',
										query: {
											tab: 'global_feed',
										}
									}"
								>
									Global Feed
								 </nuxt-link>
                            </li>
							<li class="nav-item" v-if="tag">
                                <nuxt-link class="nav-link" 
									:class="{
										active: tab === 'tag'
									}"
									exact
									:to="{
										name: '/',
										query: {
											tab: 'tag',
											tag: tag,
										}
									}"
								>
								# {{ tag }}
								</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="article-preview" v-for="article in articles" :key="article.slug">
                        <div class="article-meta">
                            <nuxt-link
                                :to="{
									name: 'profile',
									params: {
									username: article.author.username
									}
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
											username: article.author.username
										}
									}"
                                >{{article.author.username}}</nuxt-link>
                                <span class="date">{{article.createdAt | date('MM DD, YYYY')}}</span>
                            </div>
                            <button
                                class="btn btn-outline-primary btn-sm pull-xs-right"
								:class="{
									active: article.favorited
								}"
								@click="onFavorite(article)"
								:disabled="article.favoriteDisabled"
							>
                                <i class="ion-heart"></i>
                                {{article.favoritesCount}}
                            </button>
                        </div>
                        <nuxt-link
                            class="preview-link"
                            :to="{
								name: 'article',
								params:  {
									slug: article.slug
								}
							}"
                        >
                            <h1>{{article.title}}</h1>
                            <p>{{article.description}}</p>
                            <span>Read more...</span>
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>

                        <div class="tag-list">
                            <nuxt-link 
								v-for="tag in tags"
								:key="tag"
								:to="{
									name: '/',
									query: {
										tag: tag,
										tab: 'tag',
									}
								}"
								class="tag-pill tag-default">
								{{ tag }}
							</nuxt-link >
                        </div>
                    </div>
                </div>


				<nav>
					<ul class="pagination">
						<li class="page-item"
							:class="{
								active: item === page	
							}"
							v-for="item in totalPage"
							:key="item"
						>
							<nuxt-link class="page-link"
							:to="{
								name: '/',
								query: {
									page: item,
									tag: tag,
									tab: 'tag',
								}
							}"
							>{{item}}</nuxt-link>
						</li>
					</ul>
				</nav>
            </div>
        </div>
    </div>
</template>

<script>
import { getArticles, 
		  getYourFeedArticles,
		  deleteFavorite,
		  addFavorite,
	 } from "@/api/article";
import { getTags } from "@/api/tag";

import { mapState } from 'vuex'
export default {
    name: "HomeIndex",
    async asyncData({ query, store }) {
        const page = Number(query.page || 1);
        const limit = 20;
		const tag = query.tag
		const tab = query.tab || 'global_feed'
		const loadArticles = tab === 'your_feed' && store.state.user
			? getYourFeedArticles
			: getArticles

		const [ articleRes, tagRes ] = await Promise.all([
			loadArticles({
				limit,
				tag,
				offset: (page - 1) * limit,
			}),
			getTags(),
		])
		const { articles, articlesCount } = articleRes.data
		const { tags } = tagRes.data
		console.log('---$$tag',tag )
		console.log('---$$tab',tab )
        return {
			articles,
			articlesCount,
			limit,
			page,
			tags,
			tag,
			tab,
		};

	},
	watchQuery: ['page', 'tag', 'tab'],
	computed: {
		...mapState(['user']),
		totalPage(){
			return Math.ceil(this.articlesCount / this.limit)
		}
	},
	methods: {
		async onFavorite(article) {
			if (!this.user) {
				this.$router.push("/login")
				return
			}
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
	}
};
</script>

<style>
</style>