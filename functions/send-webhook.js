export async function onRequestPost(context) {
  try {
    // Cloudflare 환경 변수에서 디스코드 웹훅 주소를 안전하게 가져옵니다.
    const webhookUrl = context.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: "서버 웹훅 주소가 설정되지 않았습니다." }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // index.html에서 보낸 데이터(title, statusMessage, time)를 해석합니다.
    const requestData = await context.request.json();
    const { title, statusMessage, time } = requestData;

    // 디스코드에 뿌려줄 최종 메시지 폼을 구성합니다. (서버 시간 대신 넘어온 정확한 한국 시간 사용)
    const discordMessage = {
      username: "[🚨 긴급 호출] QR코드 조회알림",
      content: `==================================\n${statusMessage}\n📍 위치: **${title}**\n🕒 시간: ${time}\n==================================`
    };

    // Cloudflare 백엔드에서 최종 디스코드 서버로 전달
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