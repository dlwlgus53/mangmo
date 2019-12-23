from django.shortcuts import render

from django.http import HttpResponse



def index(request):
    return render(request, 'map/index.html')


def frame(request):
    return render(request, 'map/frame.html')


