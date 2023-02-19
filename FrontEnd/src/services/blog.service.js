import http from "../components/http-common";


class TutorialDataService {

    getAll() {
        return http.get("/post");
    }

    get(id) {
        return http.get(`/post/${id}`);
    }

    create(data) {
        return http.post("/post", data);
    }

    update(id, data) {
        return http.put(`/post/${id}`, data);
    }

    delete(id) {
        console.log(id);
        return http.delete(`/post/${id}`);
    }
}


export default new TutorialDataService();
