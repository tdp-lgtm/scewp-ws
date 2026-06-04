# Editors' Guide

A plain-English guide to updating the **Stockholm Centre for the Ethics of War
and Peace** website. You do **not** need to know any code to use it.

---

## 1. Logging in

1. Go to **https://stockholmcentre.org/admin/** (note the trailing slash).
2. Click **Login**.
3. Enter the email and password you set up when you accepted your invitation.
   - If you haven't been invited yet, ask the site administrator to send you an
     invite (see "Who to contact" at the bottom).

Once logged in you'll see the **Content Manager**, with a list of content types
down the left: People, Publications, Events, Journal Symposia, News, and
Research Projects.

---

## 2. The basics

- To **add** something, click a content type on the left, then click
  **"New …"** (top right).
- To **edit** something, click a content type, then click the existing item.
- Fields marked as optional can be left blank.
- Grey **hint text** under a field explains what to put there.
- When you're done, use the **Save** / **Publish** controls at the top (see
  "Draft / In Review / Published" below).

---

## 3. How to add an Event

1. Click **Events → New Event**.
2. Fill in the fields:
   - **Title** — the event name.
   - **Event type** — choose from the dropdown (Talk, Workshop, Conference,
     Public Lecture, Reading Group, Conversations on War, Other).
   - **Start date** — pick the date. (Add **End date** only for multi-day events.)
   - **Time** — e.g. `14:00–16:00 CET`.
   - **Location** — where it's held. Toggle **Online** on if it's virtual, and
     add the **Online link** (Zoom/stream URL).
   - **Speakers** — click **Add** to add each speaker on its own line.
   - **Registration URL** — link to a sign-up page, if any.
   - **Image** — optional banner image.
   - **Recording URL** — add this later, once a past event has a recording.
   - **Status override** — leave this alone in almost all cases. The website
     automatically decides whether an event is "upcoming" or "past" based on its
     date. Only change this if you specifically need to override that.
   - **Description** — the full write-up shown on the event page (you can use
     headings, bold, links, etc.).
3. Save / Publish.

---

## 4. How to add a Publication

1. Click **Publications → New Publication**.
2. Fill in:
   - **Title**, **Year**, **Publication type** (Journal Article, Book, etc.).
   - **Authors** — click **Add** for each author. Use **`Last, Firstname`**
     format (e.g. `Frowe, Helen`). One author per line.
   - **Journal or publisher**, **Volume** (e.g. `40(2)`), **Pages** (e.g.
     `112–134`) — as applicable.
   - **DOI** — just the identifier, e.g. `10.1111/japp.12345`.
   - **Open access URL** — link to a free version, if available.
   - **PDF file** — upload a PDF to host it on the site.
   - **Abstract** — the summary.
   - **Tags** — topic keywords (e.g. `self-defence`, `just war`). These power the
     filters on the Publications page.
   - **Featured on homepage** — toggle on to show it in "Featured Research".
3. Save / Publish.

---

## 5. How to add a Person

1. Click **People → New Person**.
2. Fill in:
   - **Name**, **Role** (e.g. Director, Postdoctoral Researcher, PhD Candidate).
   - **Status** — Current Member, Affiliate, or Alumni. This controls which tab
     they appear under on the People page.
   - **Photo** — a square headshot works best.
   - **Short bio** — two or three sentences.
   - **Research interests** — click **Add** for each (e.g. Self-defence,
     Just War Theory, Punishment).
   - **Website**, **Email**, **Publications link** (e.g. a PhilPapers profile).
   - **Display order** — lower numbers appear first on the page. Leave at `99`
     if you're unsure.
   - **Extended bio** — optional longer biography for their profile page.
3. Save / Publish.

---

## 6. How to add a Journal Symposium

A *journal symposium* is a collection of essays organised around a book or topic
and published in a philosophy journal.

1. Click **Journal Symposia → New Symposium**.
2. Fill in:
   - **Title** (e.g. *Symposium on Helen Frowe's Defensive Killing*).
   - **Journal** (e.g. *Ethics*) and **Year**.
   - **Subject description** — a short description of the topic.
   - **Book title** / **Book author** — if it's about a specific book.
   - **Contributors** — the essay authors in the symposium. Note: these are the
     people who wrote the essays, and they need **not** be SCEWP staff.
   - **Journal URL** — link to the journal issue.
   - **Cover image** — optional.
   - **Display order** — lower numbers appear first.
   - **Editorial introduction** — optional longer text.
3. Save / Publish.

---

## 7. How to add News

1. Click **News → New News item**.
2. Fill in **Title**, **Date**, **Category**, and a short **Summary** (shown in
   listings).
3. Then either:
   - Write the full article in the **Body** field, **or**
   - If the item just points to an article elsewhere, paste the link into
     **External URL** and leave the Body empty. The card will link straight out.
4. Toggle **Featured on homepage** to highlight it on the front page.
5. Save / Publish.

---

## 8. Uploading images and PDFs

- Any **Image** or **File (PDF)** field has an **upload** button.
- Click it, then either drag a file in or choose one from your computer.
- Uploaded files are stored in the site's media library (`public/uploads`) and
  reused — you can pick an existing file instead of re-uploading.
- Use clear, descriptive file names (e.g. `helen-frowe-2026.jpg`).

---

## 9. Draft / In Review / Published

When you save, your change moves through a simple workflow (shown as columns in
the **Workflow** view):

- **Draft** — saved but not visible on the live site. Safe to keep working on.
- **In Review** — you've marked it ready; someone can check it before it goes live.
- **Published** — live on the website. (Publishing triggers a rebuild; the change
  usually appears within a minute or two.)

To publish: open the item, then use **Publish → Publish now** (or move it along
the workflow). To take something back offline, set it back to Draft.

---

## 10. Who to contact if something breaks

- If the **login** doesn't work, or you can't see the editing interface, contact
  the site administrator to check your Netlify Identity invitation and Git
  Gateway settings.
- If a published change **doesn't appear** after a few minutes, the site may
  still be rebuilding — wait a moment and refresh. If it still doesn't show,
  flag it to the administrator.
- For anything else (new content types, design changes, errors on the site),
  contact the Centre's web administrator at
  **info@stockholmcentre.org**.
