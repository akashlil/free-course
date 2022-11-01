import Link from "next/link";

export default function Navbar() {
  let links = [
    { name: "Home", page: "/", active: "active" },
    { name: "Blog", page: "/blog" },
    { name: "About", page: "/about" },
    { name: "Contact", page: "/contact" },
    { name: "Login", page: "/login", active: "login" },
  ];

  return (
    <nav className="sticky top-0 border-b bg-slate-50/60 duration-500 backdrop-blur-2xl z-50">
      <div className="container">
        <div className="flex h-16 justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-600">Akash</h2>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {links.map((link) => (
              <Link
                className={`p-2 hover:text-white ${
                  link.active == "active" ? "bg-black text-white" : " "
                } hover:bg-black rounded-md ${
                  link.active == "login"
                    ? "bg-black text-white rounded-full py-1 px-4"
                    : " "
                }`}
                key={link.name}
                href={link.page}
              >
                {link.name} {"  "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
