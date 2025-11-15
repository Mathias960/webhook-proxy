# Service Proxy Discord Webhook pour Roblox

Service proxy gratuit qui permet d'envoyer des webhooks Discord depuis Roblox (client-side).

## 🚀 Déploiement gratuit sur Vercel

### Méthode 1 : Via GitHub (Recommandé)

1. **Créer un compte GitHub** (si vous n'en avez pas) : https://github.com
2. **Créer un nouveau repository** :
   - Allez sur https://github.com/new
   - Nommez-le `webhook-proxy` (ou autre nom)
   - Cochez "Public" ou "Private"
   - Cliquez "Create repository"

3. **Uploader les fichiers** :
   - Cliquez "uploading an existing file"
   - Glissez-déposez les fichiers `api/index.js` et `vercel.json`
   - Cliquez "Commit changes"

4. **Déployer sur Vercel** :
   - Allez sur https://vercel.com
   - Créez un compte (gratuit) avec GitHub
   - Cliquez "New Project"
   - Importez votre repository `webhook-proxy`
   - Cliquez "Deploy" (aucune configuration nécessaire)

5. **Récupérer l'URL** :
   - Après le déploiement, Vercel vous donnera une URL comme : `https://webhook-proxy-xxx.vercel.app`
   - Votre service proxy est maintenant disponible à : `https://webhook-proxy-xxx.vercel.app/api`

### Méthode 2 : Via Vercel CLI (Avancé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier webhook-proxy
cd webhook-proxy
vercel

# Suivre les instructions
```

## 📝 Utilisation dans Roblox

Une fois déployé, mettez à jour votre script Roblox :

```lua
-- Remplacez par votre URL Vercel
local CUSTOM_PROXY_URL = "https://votre-proxy.vercel.app/api?webhook_id={id}&webhook_token={token}&data={data}"
```

## 🔧 Format de l'URL

```
https://votre-proxy.vercel.app/api?webhook_id=ID&webhook_token=TOKEN&data=JSON_ENCODED
```

## ✅ Avantages

- ✅ **100% gratuit** (Vercel free tier)
- ✅ **Pas de limite** pour un usage personnel
- ✅ **Rapide** (CDN global)
- ✅ **Sécurisé** (HTTPS automatique)
- ✅ **Simple** (déploiement en 2 minutes)

## 🆘 Dépannage

- **Erreur 404** : Vérifiez que l'URL est correcte et que le déploiement est terminé
- **Erreur 500** : Vérifiez les logs dans Vercel Dashboard
- **Webhook ne s'envoie pas** : Vérifiez que le webhook Discord est valide

## 📊 Monitoring

Vous pouvez voir les logs dans le dashboard Vercel :
- Allez sur https://vercel.com/dashboard
- Sélectionnez votre projet
- Cliquez sur "Functions" pour voir les logs

