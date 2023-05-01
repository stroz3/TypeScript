enum statusCode {
    PUBLISHED = "Published",
    DRAFT = "Draft",
    DELETED = "Deleted"
}

async function getFaq(req:{
    topicId: number;
    status?: statusCode;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: statusCode;
}[]>{
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json()
    return data;
}

const req = {
    topicId: 5,
    status: statusCode.PUBLISHED
}

getFaq(req)