Deno.serve(async (req) => {
  const captchaToken = req.headers.get('x-recaptcha-token')

  if (captchaToken === null) {
    return new Response(
      JSON.stringify(
        { error: 'Missing recaptcha token' },
      ),
      { status: 400 },
    )
  }

  const secret = Deno.env.get('SB_RECAPTCHA_SECRET_KEY')!

  const body = new URLSearchParams({
    secret,
    response: captchaToken,
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
