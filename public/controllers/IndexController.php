<?php

class IndexController
{
	public static function defaultAction()
	{
		if (!Controller::isConnected())
		{
			header("Location: /Projet_Web_tweet_academie/signin/");
			return 0;
		}
		Controller::renderAction("home");
	}

	public static function LogoutAction() 
	{
		Session::destroySessionAction();
	}

	public static function uploadAction()
	{
		Controller::uploadAction();
	}
}