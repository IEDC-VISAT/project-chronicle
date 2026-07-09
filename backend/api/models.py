from django.db import models


class Job(models.Model):
    TYPE_CHOICES = [
        ('Job', 'Job'),
        ('Internship', 'Internship'),
    ]
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='Job')
    location = models.CharField(max_length=255)
    domain = models.CharField(max_length=100)
    urgent = models.BooleanField(default=False)
    posted_date = models.DateField(auto_now_add=True)
    description = models.TextField()
    requirements = models.JSONField(default=list)
    responsibilities = models.JSONField(default=list)
    apply_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} @ {self.company}"


class Bulletin(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    urgent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Skill(models.Model):
    DIFFICULTY_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]
    CATEGORY_CHOICES = [
        ('Programming', 'Programming'),
        ('Web Development', 'Web Development'),
        ('Data Science', 'Data Science'),
        ('Design', 'Design'),
        ('Business', 'Business'),
        ('Communication', 'Communication'),
        ('Cloud & DevOps', 'Cloud & DevOps'),
        ('Cybersecurity', 'Cybersecurity'),
        ('AI & Machine Learning', 'AI & Machine Learning'),
    ]
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_CHOICES)
    trending = models.BooleanField(default=False)
    editors_pick = models.BooleanField(default=False)
    tags = models.JSONField(default=list)
    description = models.TextField()
    how_to_learn = models.JSONField(default=list)
    where_to_learn = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Roadmap(models.Model):
    role = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    steps = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['role']

    def __str__(self):
        return self.role


class ResumeTemplate(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    style = models.CharField(max_length=100)
    best_for = models.CharField(max_length=255)
    download_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Prompt(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    prompt_text = models.TextField()
    usage = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'title']

    def __str__(self):
        return self.title


class LinkedInField(models.Model):
    field_name = models.CharField(max_length=255, unique=True)
    headline = models.TextField()
    about = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['field_name']

    def __str__(self):
        return self.field_name


class Country(models.Model):
    name = models.CharField(max_length=255, unique=True)
    flag = models.CharField(max_length=10)
    description = models.TextField()
    requirements = models.JSONField(default=list)
    popular_universities = models.JSONField(default=list)
    scholarships = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Countries'

    def __str__(self):
        return self.name


class University(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    program = models.CharField(max_length=255)
    ranking = models.IntegerField(null=True, blank=True)
    tuition = models.CharField(max_length=100)
    acceptance_rate = models.CharField(max_length=50)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['ranking']
        verbose_name_plural = 'Universities'

    def __str__(self):
        return f"{self.name} ({self.country})"


class Internship(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    type = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    stipend = models.CharField(max_length=100)
    description = models.TextField()
    requirements = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} @ {self.company}"
