const defaultAllowed = ["html", "css", "js", "map.js", "map.css", "woff", "woff2"];

const getIdentifiers = (url) => url.split("//")[1].split("/")[0].split(".");
const getAllowedUrls = (ids, allowed) =>
      allowed.map(term => `"+*.${ids[ids.length-2]}.${ids[ids.length-1]}/**/*.${term}"`);

const generateCommand = (url, allowed = defaultAllowed, sitename) => {
    const ids = getIdentifiers(url);
    const defaultSitename = `${ids[ids.length-2]}.${ids[ids.length-1]}`;
    const urls = getAllowedUrls(ids, allowed);

    return `httrack ${url} -O ~/documentation-files/${sitename ?? defaultSitename} ${urls.join(" ")}`;
};

const sites = [
    { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { url: "https://doc.rust-lang.org/book/", sitename: "rust-book" },
    { url: "https://doc.rust-lang.org/stable/reference/", sitename: "rust-reference" },
    { url: "https://www.typescriptlang.org/docs/" },
    { url: "https://jestjs.io/docs/getting-started" },
    { url: "https://expressjs.com/en/4x/api.html" },
    { url: "https://git-scm.com/doc" },
    { url: "https://www.gnu.org/software/bash/manual/bash.html", sitename: "bash-manual" },
    { url: "https://www.gnu.org/software/coreutils/manual/coreutils.html", sitename: "coreutils-manual" },
    { url: "https://gigamonkeys.com/book/", sitename: "pratical-common-lisp" },
    { url: "https://www.gnu.org/software/emacs/manual/", sitename: "emacs-manual" },
    { url: "https://www.gnu.org/software/emacs/manual/html_mono/elisp.html", sitename: "elisp-manual" },
    { url: "https://vim.rtorr.com/", sitename: "vim-reference" },
];

sites.map(({url, allowed, sitename}) => console.log(generateCommand(url, allowed, sitename)))
