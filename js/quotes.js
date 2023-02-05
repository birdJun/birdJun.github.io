const quotes=[
    {
        quote:"우리는 팔랑 팔랑 팔랑 팔랑 마음을 알아가",
        author:"-始発とカフカ",
    },
    {
        quote:"형태 없는 노래로 아침을 그린 채 얕고 얕은 여름 너머로",
        author:"-夜明けと蛍",
    },
    {
        quote:"쓰고 쓰고 겨우 얻은 것이 질투라던가, 멸시라던가! 같은 건 이제 잊고 싶어",
        author:"-あの夏に咲け",
    },
    {
        quote:"마음은 뇌의 신호니까 사랑도 모두 레플리카야",
        author:"-レプリカント",
    },
    {
        quote:"이 마음을 채워줄 만큼 아름다운 것을 알고 싶어.",
        author:"-盗作",
    },
    {
        quote:"좀 더 매달려줘 알게 되어버리니까 나의 노래를 비웃지 말아줘",
        author:"-ウミユリ海底譚",
    },
    {
        quote:"이대로 아주 먼 곳으로 갈 수 있다면 좋을 텐데 이제 밤밖에 잠들지 못하고",
        author:"-雲と幽霊",
    },
    {
        quote:"꽃이 시드는 순간조차에도 값이 매겨지는 것도 싫어졌어요.",
        author:"-ヒッチコック",
    },
    {
        quote:"아아, 힘껏 즐겨보자고 죽을 만큼 힘든 일은 이 세상에 없어",
        author:"-ブレーメン",
    },
    {
        quote:"너를 형태로 남기고 싶었어 추억 따위로 남길까 보냐",
        author:"-八月、某、月明かり",
    },
    {
        quote:"푸릇한 숨을 쉬었어, 예를 들자면 눈물은 화록청이야",
        author:"-五月は花緑青の窓辺から",
    },
    {
        quote:"네가 색바래지 않도록 이 노래를 부디, 부디 네가 흘러넘치지 않도록",
        author:"-雨とカプチーノ",
    }
];

function handleMouseOn(){
    author.classList.remove("hidden");
}

function handleMouseLeave(){
    author.classList.add("hidden");
}

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
author.classList.add("hidden");

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
quote.addEventListener("mouseenter",handleMouseOn);
quote.addEventListener("mouseleave",handleMouseLeave);
