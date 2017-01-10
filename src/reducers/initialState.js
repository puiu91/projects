export default {
  projects: [],
  requests: [],
  bugs: [],
  featureRequests: []
};

{
  result: "123",
  entities: {
    "articles": { 
      "123": { 
        id: "123",
        author: "1",
        title: "My awesome blog post",
        comments: [ "324" ]
      }
    },
    "users": {
      "1": { "id": "1", "name": "Paul" },
      "2": { "id": "2", "name": "Nicole" }
    },
    "comments": {
      "324": { id: "324", "commenter": "2" }
    }
  }
}

// state
{
  projects = [
    {
      id: 1,
      name: "keyword searcher",
      createdOn: "2017-01-09",
      createdBy: "John Smith",
    },
    {
      id: 2,
      name: "google mapper,
      createdOn: "2017-01-09",
      createdBy: "John Doe",
    },
  ],
  bugs = [
    {
      id: 1,
      projectId: 1,
      cratedOn: "2017-01-03",
      description: "Cannot load page",
    }, {
      id: 2,
      projectId: 1,
      cratedOn: "2017-01-03",
      description: "Cannot load",
    }, {
      id: 3,
      projectId: 2,
      cratedOn: "2017-01-05",
      description: "Missing content",
    },
  ],
}
