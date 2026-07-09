from django.contrib import admin
from .models import (
    Job, Bulletin, Skill, Roadmap,
    ResumeTemplate, Prompt, LinkedInField,
    Country, University, Internship
)

admin.site.register(Job)
admin.site.register(Bulletin)
admin.site.register(Skill)
admin.site.register(Roadmap)
admin.site.register(ResumeTemplate)
admin.site.register(Prompt)
admin.site.register(LinkedInField)
admin.site.register(Country)
admin.site.register(University)
admin.site.register(Internship)
