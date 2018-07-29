<?php

class SearchController
{
	public static function defaultAction()
	{
		$user = isset($_GET['action']) ? $_GET['action'] : "";
		header("Location: /Projet_Web_tweet_academie/profile/" . $user);
	}

	public static function searchAction()
	{
		SearchModel::searchAction();
	}
}