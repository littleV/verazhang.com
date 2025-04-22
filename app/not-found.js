import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        You have reached a page that does not exist or was removed. Please visit{" "}
        <Link className="text-blue-500" href="/">
          Home
        </Link>{" "}
        for more.
      </div>
      <div className="text-center">
        您访问了一个不存在或者已经删除的页面。更多内容请访问
        <Link className="text-blue-500" href="/">
          首页
        </Link>
        。
      </div>
    </div>
  );
}
