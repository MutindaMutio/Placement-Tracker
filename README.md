# Placement Tracker
This project aims to track a university student's placements they have applied to. It will list: company, role, deadline, status (not started, applied, online test, interview, offer, rejected) and notes (such as company info that will be useful for cover letters or interviews).

The app will list them, allow you to add, edit, delete them, filter by status, sort by deadline, and highlight positions that are closing soon.

**Status:** A React page lists applications, sorted by deadline. You can filter by status and change an application's status from a dropdown. A Not started application is flagged when its deadline is 7 days or fewer away (bold and red) or has passed (strikethrough). This is backed by five tested functions: filter by status, sort by deadline, days left, urgency, and adding days to a date. There is no back end yet.

**Limitations:** The rows shown are fake demo data, built from today's date. Status changes are not saved, so a reload resets them. Dates use UTC, which can differ from the UK date just after midnight in summer. Each application has a single deadline, so a later deadline such as an online test can't be tracked separately.

**Tests:** 11 passing tests. Run them with `npm test --prefix client`.

**Planned:** Adding, editing and deleting applications, notes, a back end API, and saving data.
