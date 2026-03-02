# Content Registry

> Every AEO page tracked. Dataview renders this from page frontmatter below.

```dataview
TABLE url AS "URL", status AS "Status", words AS "Words", jsonld AS "JSON-LD", cited_by AS "Cited By", file.mtime AS "Updated"
FROM "content"
WHERE url != null
SORT status ASC
```

---

*If Dataview isn't installed, see the individual page files in `content/` — each has YAML frontmatter with all fields.*
