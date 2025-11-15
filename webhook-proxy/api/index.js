// Service Proxy Discord Webhook pour Roblox
// Hébergé gratuitement sur Vercel

export default async function handler(req, res) {
  // Autoriser les requêtes depuis n'importe où (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Récupérer les paramètres depuis l'URL (GET) ou le body (POST)
    const webhookId = req.query.webhook_id || req.body?.webhook_id;
    const webhookToken = req.query.webhook_token || req.body?.webhook_token;
    const data = req.query.data || req.body?.data;
    const content = req.query.content || req.body?.content;

    // Vérifier que les paramètres essentiels sont présents
    if (!webhookId || !webhookToken) {
      return res.status(400).json({ 
        error: 'webhook_id et webhook_token sont requis' 
      });
    }

    // Construire l'URL du webhook Discord
    const discordWebhookUrl = `https://discord.com/api/webhooks/${webhookId}/${webhookToken}`;

    // Préparer le payload
    let payload = {};

    if (data) {
      // Si data est fourni, essayer de le parser comme JSON
      try {
        const decodedData = decodeURIComponent(data);
        payload = JSON.parse(decodedData);
      } catch (e) {
        // Si ce n'est pas du JSON valide, utiliser comme content
        payload = { content: decodeURIComponent(data) };
      }
    } else if (content) {
      // Si content est fourni directement
      payload = { content: decodeURIComponent(content) };
    } else {
      return res.status(400).json({ 
        error: 'data ou content est requis' 
      });
    }

    // Envoyer la requête POST à Discord
    const response = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    if (response.ok) {
      return res.status(200).json({ 
        success: true, 
        message: 'Webhook envoyé avec succès',
        discordResponse: responseText 
      });
    } else {
      return res.status(response.status).json({ 
        success: false, 
        error: 'Erreur Discord',
        discordResponse: responseText 
      });
    }

  } catch (error) {
    console.error('Erreur proxy:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}

