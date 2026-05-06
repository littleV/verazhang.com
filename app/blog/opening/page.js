import { JsonLd, SITE_URL, VERA_ID } from "@/lib/jsonld";

export const metadata = {
  title: "开篇寄语",
  description: "第一篇博客：关于完美主义和开始行动。",
};

const url = `${SITE_URL}/blog/opening`;

const blogPosting = {
  "@type": "BlogPosting",
  "@id": `${url}#article`,
  url,
  mainEntityOfPage: url,
  headline: "开篇寄语",
  description: "第一篇博客：关于完美主义和开始行动。",
  author: { "@id": VERA_ID },
  datePublished: "2018-01-01",
  inLanguage: "zh",
};

export default function Opening() {
  return (
    <div className="p-2">
      <JsonLd data={blogPosting} />
      <h1 className="text-3xl mb-5">开篇寄语</h1>
      <div className="mb-2">
        思考了很久第一篇博客是用中文还是英文，最后还是选择了中文。
      </div>
      <div className="mb-2">
        久久没有动笔，总想写一篇大动静，后来想想，开篇语写点心声小故事也不错。给大家讲个小故事，之前为了给朋友做一个视频，有一点点完美主义的我总是害怕视频做出来表达不到位，不能表现出多年深厚的感情，就迟迟拖着不做，拖到情绪不好，拖到自己怨念重重，直到爸爸一语道破，你就是完美主义，不肯开始，有什么难的！在老爸的一阵痛骂下，我终于拖着身体出了门，完成了视频。结果反响不错，可这件事情总是回荡在我心头，多少个idea，多少个对未来的幻想，总是止步在行动力前面，每个人都有不同的原因，我的原因很大一部分是完美主义，既然这样，就鼓励自己勇敢一点，先从不完美的展示给大家看吧，然后迭代，进步呗，所谓的互联网思想，作为从业者也要实践不是？
      </div>
      <div className="mb-2">
        <strong>
          所以，这是一篇还没有成功的结果给你们看的鸡汤文，有什么想做的，就开始吧。
        </strong>
      </div>
    </div>
  );
}
