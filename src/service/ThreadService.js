import { animeBoard } from "@/api/stub/anime-board-stub";

export default class ThreadService {

  static getById (id) {
    const thread = animeBoard.threads.find(thread => thread.id === id);
    console.log(animeBoard.threads);
    return new Promise( (resolve) => {
        resolve(thread);
    });
  }

  static addPost(post) {
    const thread = animeBoard.threads.find(thread => thread.id === post.threadId);
    const lastPost = thread.posts[thread.posts.length - 1] || {};
    const lastId = lastPost.id || 10000;
    post.id = lastId + 1;
    thread.posts.push(post);
  }
}