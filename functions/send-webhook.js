export async function onRequestPost(context) {
  try {
    // 1단계에서 설정한 Cloudflare 환경 변수에서 안전하게 주소를 가져옵니다.
    const webhookUrl = context.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: "서버 웹훅 주소가 설정되지 않았습니다." }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // index.html에서 보낸 데이터(title, statusMessage)를 받습니다.
    const requestData = await context.request.json();
    const { title, statusMessage } = requestData;

    // 디스코드 포맷에 맞게 데이터 재구성
    const discordMessage = {
      username: "[🚨 긴급 호출] QR코드 조회알림",
      content: `==================================\n${statusMessage}\n📍 위치: **${title}**\n🕒 시간: ${new Date().toLocaleString('ko-KR')}\n==================================`
    };

    // Cloudflare 서버가 디스코드로 진짜 요청을 보냄
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });

    return new Response(JSON.stringify({ success: response.ok }), {
      status: response.ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
