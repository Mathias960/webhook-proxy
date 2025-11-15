# 🚀 Guide de Déploiement - Service Proxy Discord

## ⚠️ IMPORTANT : Structure des fichiers sur GitHub

Vercel détecte automatiquement les Serverless Functions dans le dossier `api/`. 

### Structure CORRECTE sur GitHub :

```
webhook-proxy/
  ├── api/
  │   └── index.js          ← Le fichier API (OBLIGATOIRE)
  ├── package.json          ← Optionnel mais recommandé
  └── README.md             ← Optionnel
```

### ❌ NE PAS mettre :
- `vercel.json` (Vercel détecte automatiquement)
- Le dossier `webhook-proxy` dans le repository (juste les fichiers à l'intérieur)

## 📝 Étapes de déploiement

### 1. Sur GitHub

1. **Allez sur votre repository** : https://github.com/votre-username/webhook-proxy

2. **Vérifiez la structure** :
   - Le fichier `api/index.js` doit être dans un dossier `api/`
   - À la racine du repository, pas dans un sous-dossier

3. **Si la structure est incorrecte** :
   - Supprimez tous les fichiers
   - Créez un nouveau dossier `api` (cliquez "Create new file", tapez `api/index.js`)
   - Collez le contenu de `api/index.js`
   - Créez `package.json` à la racine
   - Collez le contenu de `package.json`

### 2. Sur Vercel

1. **Allez sur** https://vercel.com/dashboard

2. **Si le projet existe déjà** :
   - Cliquez sur votre projet `webhook-proxy`
   - Cliquez sur "Settings" → "Git"
   - Cliquez sur "Redeploy" ou attendez que Vercel redéploie automatiquement

3. **Si c'est un nouveau projet** :
   - Cliquez "New Project"
   - Importez votre repository GitHub
   - Cliquez "Deploy" (aucune configuration nécessaire)

### 3. Test

Une fois déployé, testez dans votre navigateur :

```
https://webhook-proxy-lake.vercel.app/api?webhook_id=TEST&webhook_token=TEST&data=TEST
```

**Réponse attendue** (erreur normale car IDs faux) :
```json
{
  "success": false,
  "error": "Erreur Discord",
  ...
}
```

Si vous voyez encore un 404, la structure des fichiers sur GitHub est incorrecte.

## 🔍 Vérification

1. Allez sur https://github.com/votre-username/webhook-proxy
2. Vérifiez que vous voyez :
   ```
   api/
     index.js
   package.json
   ```
3. Si vous voyez `webhook-proxy/api/index.js`, c'est **FAUX** - supprimez le dossier parent

## ✅ Structure finale GitHub

```
Repository: webhook-proxy
├── api/
│   └── index.js
└── package.json
```

C'est tout ! Vercel détectera automatiquement.

