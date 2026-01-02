Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const { token } = await req.json()

  if (!token) {
    return new Response(
      JSON.stringify(
        { error: 'gae Token missing' },
      ),
      { status: 400 },
    )
  }

  const secret = Deno.env.get('RECAPTCHA_SECRET_KEY')
  if (!secret) {
    return new Response(
      JSON.stringify({ error: 'Server misconfigured dumbass' }),
      { status: 500 },
    )
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  })

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body,
  })

  const data = await res.json()

  return new Response(
    JSON.stringify({
      success: data.success && data.score >= 0.5,
      score: data.score,
      'error-codes': data['error-codes'],
    }),
    { headers: { 'Content-Type': 'application/json' } },
  )
})
